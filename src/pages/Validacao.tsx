import { useParams } from "react-router-dom";
import { CheckCircle, Shield, Calendar, Hash, GraduationCap, Building2, Clock, BadgeCheck } from "lucide-react";

const Validacao = () => {
  const { ra } = useParams();

  // Dados do estudante (em produção viria de um banco de dados)
  const studentData = {
    "202051417341": {
      name: "Luiz Gustavo Moreira de Oliveira",
      ra: "202051417341",
      course: "Ciência da Computação",
      institution: "Centro Universitário UniMetrocamp",
      campus: "Campinas",
      validUntil: "12/2026",
      status: "ATIVO",
      enrollmentDate: "02/2020",
      modality: "Presencial",
    },
  };

  const student = studentData[ra as keyof typeof studentData];

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">Registro Não Encontrado</h1>
          <p className="text-gray-600">
            O RA informado não foi encontrado em nossa base de dados.
          </p>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-wyden-primary/5 py-8 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Header de Validação */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Banner de Status */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">Carteirinha Válida</h1>
                <p className="text-white/80 text-sm">Documento autenticado com sucesso</p>
              </div>
            </div>
          </div>

          {/* Informações do Estudante */}
          <div className="p-6 space-y-5">
            {/* Instituição */}
            <div className="text-center pb-4 border-b border-gray-100">
              <p className="text-gray-500 text-xs uppercase tracking-wider">Centro Universitário</p>
              <h2 className="text-2xl font-bold text-wyden-primary">UniMetrocamp</h2>
              <p className="text-wyden-accent font-semibold">Grupo Wyden</p>
            </div>

            {/* Nome */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Nome do Estudante</p>
              <p className="text-gray-900 font-bold text-lg">{student.name}</p>
            </div>

            {/* Grid de Informações */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Hash className="w-4 h-4 text-wyden-accent" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider">RA</p>
                </div>
                <p className="text-gray-900 font-semibold">{student.ra}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-wyden-accent" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Campus</p>
                </div>
                <p className="text-gray-900 font-semibold">{student.campus}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-wyden-accent" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Curso</p>
                </div>
                <p className="text-gray-900 font-semibold">{student.course}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-wyden-accent" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Válido até</p>
                </div>
                <p className="text-gray-900 font-semibold">{student.validUntil}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-wyden-accent" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Modalidade</p>
                </div>
                <p className="text-gray-900 font-semibold">{student.modality}</p>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center justify-center gap-2 bg-green-50 rounded-xl p-4">
              <BadgeCheck className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-bold text-lg">MATRÍCULA {student.status}</span>
            </div>
          </div>
        </div>

        {/* Informações de Segurança */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-wyden-primary" />
            <h3 className="text-gray-900 font-bold">Informações de Autenticação</h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-500">Data da Verificação</span>
              <span className="text-gray-900 font-medium">{currentDate}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-500">Código de Autenticação</span>
              <span className="text-gray-900 font-mono text-xs">WYD-{student.ra.slice(-6)}-2024</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">Emitido por</span>
              <span className="text-gray-900 font-medium">Sistema Acadêmico Wyden</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs">
          Este documento digital tem a mesma validade da carteirinha física.
          <br />
          Em caso de dúvidas, entre em contato com a secretaria acadêmica.
        </p>
      </div>
    </div>
  );
};

export default Validacao;
