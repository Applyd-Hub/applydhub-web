import Image from "next/image";

interface LogoTextProps {
  variant?: "default" | "onDark";
}

export function LogoText({ variant = "default" }: LogoTextProps) {
  const applyd = variant === "onDark" ? "text-white" : "text-foreground";
  const hub = "text-secondary";

  return (
    <span className={`font-logo text-lg font-bold tracking-tight`}>
      <span className={applyd}>Applyd</span>
      <span className={hub}>Hub</span>
    </span>
  );
}

export function Logo({ variant = "default" }: LogoTextProps) {
  if (variant === "onDark") {
    return (
      <>
        <Image
          src="/images/icon-dark.png"
          alt="Applyd Hub"
          width={28}
          height={28}
          className="rounded-md"
        />
        <LogoText variant="onDark" />
      </>
    );
  }

  return (
    <>
      <Image
        src="/images/icon-light.png"
        alt="Applyd Hub"
        width={28}
        height={28}
        className="rounded-md dark:hidden"
      />
      <Image
        src="/images/icon-dark.png"
        alt=""
        width={28}
        height={28}
        className="hidden rounded-md dark:block"
      />
      <LogoText variant={variant} />
    </>
  );
}
