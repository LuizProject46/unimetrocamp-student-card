import { User, GraduationCap, Calendar, Hash, Building2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface StudentCardProps {
  name: string;
  ra: string;
  course: string;
  institution: string;
  campus?: string;
  validUntil?: string;
  photoUrl?: string;
}

const StudentCard = ({
  name,
  ra,
  course,
  institution,
  campus = "Campinas",
  validUntil = "12/2026",
  photoUrl,
}: StudentCardProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
      {/* Card Container */}
      <div className="relative card-gradient rounded-2xl student-card-shadow overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-wyden-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Header with Institution */}
        <div className="relative px-6 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                Centro Universitário
              </span>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                UniMetrocamp
              </h1>
              <span className="text-wyden-orange font-semibold text-sm mt-0.5">
                Wyden
              </span>
            </div>
            <div className="flex flex-col items-end">
              <Building2 className="w-8 h-8 text-white/80 mb-1" />
              <span className="text-white/60 text-xs">{campus}</span>
            </div>
          </div>
          
          {/* Orange accent line */}
          <div className="absolute bottom-0 left-6 right-6 h-0.5 accent-gradient rounded-full" />
        </div>

        {/* Main Content */}
        <div className="relative px-6 py-5">
          <div className="flex gap-5">
            {/* Photo Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-28 h-36 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg bg-white/10">
                  {photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={`Foto de ${name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-white/40" />
                    </div>
                  )}
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Student Info */}
            <div className="flex-1 min-w-0">
              <div className="space-y-3">
                {/* Name */}
                <div>
                  <label className="text-white/50 text-[10px] uppercase tracking-wider font-medium">
                    Nome do Estudante
                  </label>
                  <h2 className="text-white font-bold text-lg leading-tight truncate">
                    {name}
                  </h2>
                </div>

                {/* RA */}
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-wyden-orange" />
                  <div>
                    <label className="text-white/50 text-[10px] uppercase tracking-wider font-medium">
                      RA
                    </label>
                    <p className="text-white font-semibold text-sm tracking-wide">
                      {ra}
                    </p>
                  </div>
                </div>

                {/* Course */}
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-wyden-orange" />
                  <div>
                    <label className="text-white/50 text-[10px] uppercase tracking-wider font-medium">
                      Curso
                    </label>
                    <p className="text-white font-medium text-sm">
                      {course}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative px-6 py-4 glass-effect">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-wyden-orange" />
              <div>
                <label className="text-white/50 text-[9px] uppercase tracking-wider">
                  Válido até
                </label>
                <p className="text-white font-semibold text-sm">{validUntil}</p>
              </div>
            </div>
            
            {/* QR Code with validity link */}
            <a 
              href={`https://validacao.wyden.com.br/estudante/${ra}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              <QRCodeSVG 
                value={`https://validacao.wyden.com.br/estudante/${ra}`}
                size={48}
                level="M"
                fgColor="#003366"
              />
            </a>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1.5 accent-gradient" />
      </div>

      {/* Card Back Info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Carteirinha Digital de Estudante
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          {institution} • Grupo Wyden
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
