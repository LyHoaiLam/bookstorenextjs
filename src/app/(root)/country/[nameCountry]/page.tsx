import AppContainer from "@/components/layouts/Container";

export default function CountryPage({ params }: { params: { nameCountry: string } }) {
  const decodedName = decodeURIComponent(params.nameCountry);

  return (
    <AppContainer>
      <h1 className="text-2xl font-bold">Country: {decodedName}</h1>
      <p>Welcome to {decodedName.toUpperCase()}!</p>
    </AppContainer>
  );
}
