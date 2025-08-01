const labelStyle = "font-500";

function FormRow({ label, error, children }) {
    return (
        <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] p-[1.2rem_0] first:pt-0 last:pb-0 not-last:border-b-[1px] border-[var(--color-grey-100)] has-[button]:flex has-[button]:justify-end has-[button]:gap-[1.2rem]">
            <label className={labelStyle} htmlFor={children.props?.id}>
                {label}
            </label>
            {children}
            {error && (
                <span className="text-[1.4rem] text-[var(--color-red-700)]">
                    {error}
                </span>
            )}
        </div>
    );
}

export default FormRow;
