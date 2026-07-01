interface SharedSettlementFooterLinkProps {
  text: string;
  href: string;
}

export function SharedSettlementFooterLink({
  text,
  href,
}: SharedSettlementFooterLinkProps) {
  return (
    <a
      href={href}
      className="block cursor-pointer text-center text-body-sm font-semibold text-primary"
    >
      {text}
    </a>
  );
}
