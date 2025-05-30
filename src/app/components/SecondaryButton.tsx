import { Button, Link } from "@radix-ui/themes";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Button size="3" variant="outline" asChild>
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

export default SecondaryButton;
