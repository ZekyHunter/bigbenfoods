import Container from "@/components/layout/Container";

export default function MenuPage() {
  return (
    <Container>
      <div className="pt-10">
        <p className="uppercase tracking-[.25em] text-neutral-300">Menu</p>
        <h1 className="text-2xl font-serif border-b border-red-900 pb-2 mb-6">
          Fusion Rolls
        </h1>
        <p className="text-neutral-400">Items and filters...</p>
      </div>
    </Container>
  );
}
