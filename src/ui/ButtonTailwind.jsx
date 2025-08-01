



const base = "border-none rounded-[var(--border-radius-sm)] shadow-[var(--shadow-sm)]"
const styles = {
  primary: "text-[var(--color-brand-50)] bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)]",
  secondary: "text-[var(--color-grey-600)] bg-[var(--color-grey-0)] border-[1px] border-solid border-[var(--color-grey-200)] hover:bg-[var(--color-grey-50)]",
  danger: "text-[var(--color-red-100)] bg-[var(--color-red-700)] hover:bg-[var(--color-red-800)]",

  small: "text-[1.2rem] p-[0.4rem_0.8rem] uppercase font-[600] text-center",
  medium: "text-[1.4rem] p-[1.2rem_1.6rem] font-[500]",
  large: "text-[1.6rem] p-[1.2rem_2.4rem] font-[500]"

}

export default function Button({children, onClick, variation="primary", size="medium", type}) {
  return(
    <button type={type} className={base + " " + styles[variation] + " " + styles[size]} onClick={onClick}>{children}</button>
    // <div className="border-[1px] border-solid border-[var(--color-grey-200)]"></div>
  )
}


// const sizes = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//     text-transform: uppercase;
//     font-weight: 600;
//     text-align: center;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//     font-weight: 500;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//     font-weight: 500;
//   `,
// };

// const variations = {
//   primary: css`
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   `,
//   secondary: css`
//     color: var(--color-grey-600);
//     background: var(--color-grey-0);
//     border: 1px solid var(--color-grey-200);

//     &:hover {
//       background-color: var(--color-grey-50);
//     }
//   `,
//   danger: css`
//     color: var(--color-red-100);
//     background-color: var(--color-red-700);

//     &:hover {
//       background-color: var(--color-red-800);
//     }
//   `,
// };