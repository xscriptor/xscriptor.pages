import ClientComponentHome from './components/clientcomponenthome';


export const metadata = {
  title: "Inicio — Xscriptor",
  description: "Web oficial de Xscriptor — Literatura, poesía y arte por Óscar Preciado",
}

export default function Homepage() {
  return (
    <div>
      <ClientComponentHome />
    </div>
  );
};
