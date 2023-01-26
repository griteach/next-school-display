interface ITitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: ITitleComponentProps) {
  return (
    <div className="w-full pl-2">
      <h3 className="text-xl w-20">{title}</h3>
    </div>
  );
}
