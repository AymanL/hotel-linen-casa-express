import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo = ({ className, variant = "default" }: LogoProps) => {
  return (
    <div className={cn(
      "font-bold text-2xl tracking-wide",
      variant === "default" ? "text-primary" : "text-white",
      className
    )}>
      KENZAMINE
    </div>
  );
};

export default Logo;