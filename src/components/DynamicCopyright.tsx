type DynamicCopyrightProps = {
  template: string;
};

export function DynamicCopyright({ template }: DynamicCopyrightProps) {
  const [beforeYear, afterYear = ""] = template.split("{year}");

  return (
    <>
      {beforeYear}
      <span suppressHydrationWarning>{new Date().getFullYear()}</span>
      {afterYear}
    </>
  );
}
