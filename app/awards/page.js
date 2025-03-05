import AwardsSection from "@/components/AwardsSection";

export const metadata = {
  title: "Awards",
};

export default async function Page() {
  return (
    <main className="md:w-[50rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
     <h1 className="text-3xl font-semibold">Awards</h1>
     <AwardsSection />
    </main>
  );
}
