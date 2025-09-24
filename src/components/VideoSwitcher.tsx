import React, { useState, useEffect } from 'react';

interface VideoSwitcherProps {
  videoUrls: string[];
}

const VideoSwitcher: React.FC<VideoSwitcherProps> = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2000 milissegundos = 2 segundos

    return () => {
      clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    };
  }, [videoUrls]); // Reinicia o efeito se a lista de vídeos mudar

  // Certifica-se de que videoUrls não está vazio antes de tentar acessar um vídeo
  if (videoUrls.length === 0) {
    return <div>Carregando vídeos...</div>;
  }

  return (
    <video key={currentVideoIndex} width="100%" height="360" autoPlay muted loop playsInline>
      <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </video>
  );
};

export default VideoSwitcher;