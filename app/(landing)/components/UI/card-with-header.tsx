



type CardWithHeaderProps = {
    title: string;
    children: React.ReactNode;
}
const CardWithHeader = ({ title, children }: CardWithHeaderProps) => {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-200 px-5 py-4 ">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
   );
}


export default CardWithHeader;