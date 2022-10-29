import React from "react";
import formImg from "/assets/form-img.png";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi";
import { useState } from "react";

const Forms = () => {
  const [nome, setNome] = useState(false);
  const [email, setEmail] = useState(false);
  const [telefone, setTelefone] = useState(false);
  const [CPF, setCPF] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bg-[#e6e6e6] flex h-[60vh] xl:w-1/2 w-[450px] rounded-lg gap-3 p-10">
      <div className=" xl:w-1/2 hidden h-[100%] xl:flex flex-col justify-center items-center">
        <img src={formImg} alt="" className="w-2/3 h-1/2" />
      </div>

      <form
        action=""
        className="flex flex-col items-center gap-3 w-full justify-center xl:w-1/2"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-lg text-[#1E90FF]">Dados Pessoais</h1>
        <div className="relative">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className=" text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
            onChange={(e) => setNome(e.target.value)}
            required
            maxLength={25}
          />

          <FaUser className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={25}
          />
          <AiOutlineMail className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
        </div>
        <div className="relative">
          <input
            name="telefone"
            type="number"
            placeholder="(00)00000-0000"
            className=" text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
            onChange={(e) => setTelefone(e.target.value)}
            required
            maxLength={16}
          />
          <BsTelephoneInbound className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
        </div>
        <div className="relative">
          <input
            type="number"
            name="CPF"
            placeholder="CPF, apenas números "
            className=" text-[#666] w-full rounded-2xl h-10 pl-10 outline-none box-border border-2 border-[#aaa] focus:border-[#1E90FF] shadow shadow-blue-500/40"
            onChange={(e) => setCPF(e.target.value)}
            required
            value={CPF}
          />
          <HiOutlineIdentification className="i absolute left-0 top-3 ml-[20px] text-center text-sm text-[#aaa]" />
        </div>

        <button
          type="submit"
          className="bg-[#1E90FF] w-20 text-white h-10 rounded-lg hover:bg-[#316aa3] hover:transition duration-150"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Forms;
