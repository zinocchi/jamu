interface ConsultationResultProps {
    gejala: string;
}

const ConsultationResult: React.FC<ConsultationResultProps> = ({ gejala }) => {
    return (
        <div className="p-10 text-3xl text-white">
            Kamu memilih: {gejala || 'Tidak ada gejala'}
        </div>
    );
};

export default ConsultationResult;
