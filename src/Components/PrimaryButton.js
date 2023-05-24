export default function PrimaryButton({ className, children, disabled }) {
  return (
    <button
      className={`bg-pink-500 hover:bg-pink-600 transition py-2 text-white font-medium rounded disabled:bg-pink-300 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
