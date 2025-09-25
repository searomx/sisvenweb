'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

export default function FormPage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms || !captchaValue) {
      alert('Você precisa aceitar os termos e completar o reCAPTCHA.');
      return;
    }
    // Aqui você pode enviar os dados para sua API
    alert('Conta criada com sucesso!');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email Profissional" required className="input" />
        <input type="text" name="nome" placeholder="Nome completo" required className="input" />
        <input type="text" name="documento" placeholder="CNPJ ou CPF" required className="input" />
        <input type="tel" name="telefone" placeholder="Telefone" required className="input" />
        <input type="text" name="cep" placeholder="CEP" required className="input" />

        <select name="segmento" required className="input">
          <option value="">Segmento de atuação</option>
          <option value="Auto Peças">Auto Peças</option>
          <option value="Materiais de Construção">Materiais de Construção</option>
          <option value="Vestuário">Vestuário</option>
          <option value="Sapatos">Sapatos</option>
          <option value="Outros">Outros</option>
        </select>

        <select name="prioridade" required className="input">
          <option value="">Qual a sua Prioridade?</option>
          <option value="Controle de Pedidos">Controle de Pedidos</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="Outros">Outros</option>
        </select>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
          />
          <span>
            Eu aceito os{' '}
            <Link href="/contrato.pdf" target="_blank" className="text-blue-600 underline">
              termos e condições
            </Link>
          </span>
        </label>

        <ReCAPTCHA
          sitekey="6LfFB9ErAAAAAFOvT9G7V-abcvhSQYq2ThM88UGd"
          onChange={(value) => setCaptchaValue(value)}
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Criar Conta
        </button>
      </form>

      <p className="mt-4 text-center">
        Já possui uma conta no SV?{' '}
        <Link href="/login" className="text-blue-600 underline">
          Acessar
        </Link>
      </p>
    </div>
  );
}
// Certifique-se de instalar o pacote react-google-recaptcha:
// npm install react-google-recaptcha
// E de configurar a chave do site reCAPTCHA no componente acima.   