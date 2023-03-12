function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center">
      <div className="flex-column justify-content-center align-items-center text-center my-5">
        <h1 className="fw-bold mb-3">
          <a href="https://github.com/santo-ti/SANTO-TCC-IA" target="_blank">
            TCC-IA
          </a>
          {' ->'} VENCENDO O JOGO:
        </h1>
        <h2 className="col-lg-6 mx-auto mb-5">
          Como desenvolver uma plataforma que permita a implementação de redes neurais voltadas para o aprendizado do
          jogo Kalah.
        </h2>
        <h3 className="fw-bold mb-3">RESUMO:</h3>
        <h4 className="col-lg-6 mx-auto mb-4">
          Este trabalho tem como objetivo a criação de um sistema para viabilizar a implementação de redes neurais
          artificiais voltadas para aprender a jogar uma variação do jogo Kalah, utilizando técnicas de Inteligência
          Artificial.
        </h4>
        <p className="fs-5 fw-bold">
          Desenvolvido por{' '}
          <a href="https://github.com/santo-ti" target="_blank">
            santo-ti
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
