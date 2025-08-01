import styled from "styled-components";

import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";



const labelStyle = "font-500";

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

function CreateCabinForm() {
    const { register, handleSubmit, reset, getValues, formState } = useForm();
    const { errors } = formState;
    const queryClient = useQueryClient();

    const { mutate, isLoading: isCreating } = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    });

    function onSubmit(data) {
        console.log(data);
        mutate({...data, image: data.image[0]});
    }

    function onError(errors) {
        console.log(errors);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow label="Cabin name" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "This field is required",
                    })}
                    disabled={isCreating}
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
                    disabled={isCreating}
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
                    disabled={isCreating}
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
                            value < getValues().regularPrice ||
                            "Discount should be less than regular price",
                    })}
                    disabled={isCreating}
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
                    disabled={isCreating}
                />
            </FormRow>

            <FormRow label="Cabin photo">
                <input
                    className="text-[1.4rem] rounded-[var(--border-radius-sm)] file:font-[500] file:p-[0.8rem_1.2rem] file:mr-[1.2rem] file:border-none file:rounded-[var(--border-radius-sm)] file:text-[var(--color-brand-50)] file:bg-[var(--color-brand-600)] file:cursor-pointer file:transition-all file:hover:bg-[var(--color-brand-700)]"
                    id="image"
                    accept="image/*"
                    type="file"
                    {...register("image", {
                        required: "This field is required",
                    })}
                />
            </FormRow>
            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isCreating}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;

// const FileInput = styled.input`
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-sm);

//   &::file-selector-button {
//     font: inherit;
//     font-weight: 500;
//     padding: 0.8rem 1.2rem;
//     margin-right: 1.2rem;
//     border-radius: var(--border-radius-sm);
//     border: none;
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);
//     cursor: pointer;
//     transition: color 0.2s, background-color 0.2s;

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   }
// `;


// const FormRowd = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;
