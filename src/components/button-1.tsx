export default function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-black text-white dark:bg-white dark:text-black rounded-md h-8 px-3 focus:outline-blue-500">
      {children}
    </button>
  );
}
