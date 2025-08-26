import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo = ({ className, variant = "default" }: LogoProps) => {
  return (
    <div className={cn(
      "flex items-center gap-3",
      className
    )}>
      <div className={cn(
        "font-bold text-3xl tracking-widest uppercase",
        "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent",
        "drop-shadow-sm",
        variant === "white" && "from-white to-white/90"
      )}>
        KENZAMINE
      </div>
    </div>
  );
};

export default Logo;