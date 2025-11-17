interface ConsultationResultProps {
    gejala: string;
}

export default function ConsultationResult({
    gejala,
}: ConsultationResultProps) {
    return (
        <div className="p-10 text-3xl text-white">Kamu memilih: {gejala}</div>
    );
}
