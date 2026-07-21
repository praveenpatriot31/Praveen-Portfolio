export default function EditorialLayout({ title, children }) {
  return (
    <section className="py-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-20 gap-y-12">
      <aside>
        <h2 className="text-[10px] md:text-[12px] font-medium tracking-[0.3em] uppercase text-[#EF4444]">
          {title}
        </h2>
      </aside>
      <div className="max-w-[700px]">
        {children}
      </div>
    </section>
  );
}