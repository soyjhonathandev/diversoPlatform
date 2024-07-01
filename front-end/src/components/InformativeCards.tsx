interface IInformativeCardsProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface IInformativeCardsProps {
  title: string;
  description: string;
  icon: JSX.Element;
  number: string; // Agregar un número de serie
}

const InformativeCards = ({
  title,
  description,
  icon,
  number, // Aceptar el número como prop
}: IInformativeCardsProps) => {
  return (
    <article className="bg-black text-white h-86 xl:w-1/3 w-full rounded-lg p-8">
      <div className="mb-3 flex md:justify-between items-center flex-col-reverse md:flex-row gap-3">
        <div>
          <span className="text-primary text-6xl font-bold">{number}</span> {/* Estilo para el número de serie */}
          <h4 className="text-primary text-3xl font-medium">{title}</h4>
        </div>
      </div>
      <p className="md:text-lg">{description}</p>
    </article>
  );
};

export default InformativeCards;
