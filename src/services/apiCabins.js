// import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be deleted");
    }

    return data;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
    
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    //1. Create/Edit Cabin
    let query = supabase.from("cabins");

    // A) CREATE  // insertan object mora biti v arrayu!
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

    // B) EDIT  // editiran object ni v arrayu!
    if (id)
        query = query
            .update({ ...newCabin })
            .eq("id", id)
            .select();

    const { data, error } = await query.select();

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be created");
    }

    //2. upload imagine

    // ce je slucajon ze uploadana slika, ne uploadaj nicesar (za dupliciranje cabin)
    if(hasImagePath) return data
    // Upload file using standard upload


    const { error: storrageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. delete Cabin IF there was an error uploading image
    if (storrageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        throw new Error("Image could not be uploaded");
    }

    return data;
}
