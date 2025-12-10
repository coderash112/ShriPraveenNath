export default function PageHeader({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-semibold text-orange-600 mb-4">
      {title}
    </h2>
  );
}
