interface Props {
  title?: string;
  description?: string;
}

export const ModalHeader = ({ title, description }: Props) => (
  <div className="p-6 relative">
    {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
    {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
  </div>
);
