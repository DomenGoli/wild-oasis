import styled from "styled-components";

import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
`;

// const Error = styled.span`
//     font-size: 1.4rem;
//     color: var(--color-red-700);
// `;

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
    const { id: editId, ...editValues } = cabinToEdit;
    const isEditSession = Boolean(editId);

    // defaultValues za populate fielde v editsessionu, v createSession pa so prazni
    const { register, handleSubmit, reset, getValues, formState } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });

    const { createCabin, isCreating } = useCreateCabin();
    const { editCabin, isEditing } = useEditCabin();
    const isWorking = isCreating || isEditing;

    const { errors } = formState;

    function onSubmit(data) {
        const image =
            typeof data.image === "string" ? data.image : data.image[0];
        if (isEditSession)
            editCabin({ newCabinData: { ...data, image }, id: editId });
        else {
            createCabin(
                { ...data, image },
                {
                    onSuccess: () => {
                        reset();
                        onCloseModal?.();
                    },
                }
            );
        }
    }

    function onError(errors) {
        console.log(errors);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : 'regular'}>
            <FormRow label="Cabin name" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "This field is required",
                    })}
                    disabled={isWorking}
                />
            </FormRow>
            <FormRow label="Maximum capacity" error={errors?.name?.message}>
                <Input
                    type="number"
                    id="maxCapacity"
                    {...register("maxCapacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Capacity shoud be at least 1",
                        },
                    })}
                    disabled={isWorking}
                />
            </FormRow>
            <FormRow label="Regular price" error={errors?.name?.message}>
                <Input
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Capacity shoud be at least 1",
                        },
                    })}
                    disabled={isWorking}
                />
            </FormRow>
            <FormRow label="Discount" error={errors?.name?.message}>
                <Input
                    type="number"
                    id="discount"
                    defaultValue={0}
                    {...register("discount", {
                        required: "This field is required",
                        validate: (value) =>
                            Number(value) < Number(getValues().regularPrice) ||
                            "Discount should be less than regular price",
                    })}
                    disabled={isWorking}
                />
            </FormRow>
            <FormRow
                label="Description for website"
                error={errors?.name?.message}
            >
                <Textarea
                    type="number"
                    id="description"
                    defaultValue=""
                    {...register("description", {
                        required: "This field is required",
                    })}
                    disabled={isWorking}
                />
            </FormRow>

            <FormRow label="Cabin photo">
                <input
                    className="text-[1.4rem] rounded-[var(--border-radius-sm)] file:font-[500] file:p-[0.8rem_1.2rem] file:mr-[1.2rem] file:border-none file:rounded-[var(--border-radius-sm)] file:text-[var(--color-brand-50)] file:bg-[var(--color-brand-600)] file:cursor-pointer file:transition-all file:hover:bg-[var(--color-brand-700)]"
                    id="image"
                    accept="image/*"
                    type="file"
                    {...register("image", {
                        required: isEditSession
                            ? false
                            : "This field is required",
                    })}
                />
            </FormRow>
            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    variation="secondary"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button disabled={isWorking}>
                    {isEditSession ? "Edit cabin" : "Create new cabin"}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
