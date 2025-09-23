import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1> CRUD con NEXTJS</h1>
      <div>
        <input type="text" className="" placeholder="nombre"></input>
      </div>
      <div>
        <ul>
          <li>Nombre1</li>
          <li>Nombre2</li>
          <li>Nombre3</li>
          <li>Nombre4</li>
        </ul>
      </div>
    </div>
  );
}
