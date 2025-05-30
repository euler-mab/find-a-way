import { Button, Link } from "@radix-ui/themes";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ href, children }) => {
  return (
    <Button
      size="3"
      highContrast
      asChild
      style={{ backgroundColor: "#FFAD82" }}
    >
      <Link
        href={href}
        className="no-underline"
        style={{ textDecoration: "none" }}
      >
        {children}
      </Link>
    </Button>
  );
};

export default PrimaryButton;
