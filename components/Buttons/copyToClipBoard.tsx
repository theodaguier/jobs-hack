interface CopyToClipBoardProps {
  textToCopy: string;
}

export default function CopyToClipBoard({ textToCopy }: CopyToClipBoardProps) {
  const copyText = () => {
    const trimmedText = textToCopy.trim();
    navigator.clipboard.writeText(trimmedText);
    alert("Le texte a été copié !");
  };

  return (
    <div>
      <button onClick={copyText}>Copier le texte</button>
    </div>
  );
}
