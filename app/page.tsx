import Container from "@/components/layout/Container";

export default function HomePage() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">
            Hello Big Ben Foods
          </h1>
          <p className="mt-2 text-neutral-300">Tailwind test</p>
        </div>
      </Container>
    </main>
  );
}
