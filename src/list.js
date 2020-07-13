import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Portifolio from "./portifolio";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  rot: {
    marginBottom: "15px",
    marginTop: "15px",
  },

  card: {
    minWidth: "100%",
    backgroundColor: "#00000012",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  div: {
    marginLeft: "30px",
    marginRight: "30px",
    marginBottom: "15px",
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    width: 250,
  },
  texto: {
    marginRight: "10%",
    marginLeft: "10%",
    marginBottom: "10%",
    marginTop: "10%",
  },
  span: {
    color: "#fafafa",
    opacity: 0.7,
    margin: "auto",
    paddingTop: "1px",
    fontSize: "1rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    lineHeight: "1.6",
    letterSpacing: "0.0075em",
    textAlign: "center",
    display: "block",
  },
  spanTexto: {
    color: "#fafafa",
    opacity: 0.7,
    margin: "auto",
    paddingTop: "1px",
    fontSize: "1.2rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    lineHeight: "1.6",
    letterSpacing: "0.0075em",
    textAlign: "center",
    display: "block",
  },
  img: {
    width: "300px",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.rot}>
      {/* <div className={classes.texto}>
        {" "}
        <span className={classes.spanTexto}>
          Somos mulheres negras e afrodescendentes. Blogueiras com estórias de
          vida e campos de interesse diversos; reunidas em torno das questões da
          negritude, do feminismo e da produção de conteúdo. Sujeitas de nossa
          própria estória e de nossa própria escrita, ferramenta de luta e
          resistência. Viemos contar nossas estórias, exercício que nos é
          continuamente negado numa sociedade estruturalmente discriminatória e
          desigual. O racismo institucional e o mito da meritocracia garantem a
          distribuição nada democrática dos serviços de saúde e educação
          promovendo o adoecimento físico e emocional da população negra e
          afrodescendente; impedindo o acesso à tecnologia, aos recursos
          naturais e financeiros, aos espaços de poder como universidades e
          cargos de chefia. Desde a assinatura da lei áurea (grafada em
          minúscula de propósito) fomos condenados à subcidadania e
          marginalização.
        </span>
      </div> */}
      <Portifolio />
      <Divider style={{ background: "#00000012", margin: "8px" }} />
      <div className={classes.texto}>
        {" "}
        <span className={classes.spanTexto}>
          Somos mulheres negras e afrodescendentes. Blogueiras com estórias de
          vida e campos de interesse diversos; reunidas em torno das questões da
          negritude, do feminismo e da produção de conteúdo. Sujeitas de nossa
          própria estória e de nossa própria escrita, ferramenta de luta e
          resistência. Viemos contar nossas estórias, exercício que nos é
          continuamente negado numa sociedade estruturalmente discriminatória e
          desigual. O racismo institucional e o mito da meritocracia garantem a
          distribuição nada democrática dos serviços de saúde e educação
          promovendo o adoecimento físico e emocional da população negra e
          afrodescendente; impedindo o acesso à tecnologia, aos recursos
          naturais e financeiros, aos espaços de poder como universidades e
          cargos de chefia. Desde a assinatura da lei áurea (grafada em
          minúscula de propósito) fomos condenados à subcidadania e
          marginalização.
        </span>
      </div>
      <Divider style={{ background: "#00000012", margin: "8px" }} />
      <img
        style={{ width: "100%" }}
        src="https://www.modefica.com.br/wp-content/uploads/2016/11/autora-negra-CAPA.jpg"
      />
      <Divider style={{ background: "#00000012", margin: "8px" }} />
      <h1 style={{ color: "#fafafa", textAlign: "center" }}>CITAÇÕES</h1>
      <div className={classes.div}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              style={{ color: "#fafafa" }}
            >
              Eu tenho carregado esse peso E o mundo debaixo dessas tranças E
              estou confusa Você aceitaria a dor que veio Com todas as partes
              que você quer reivindicar para você
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.div}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              style={{ color: "#fafafa" }}
            >
              Falar de raça é falar da dominação e escravização de um povo, do
              apagamento, silenciamento e retirada da sua humanidade. Falar
              sobre raça é falar sobre a desigualdade que estrutura a nossa
              sociedade até hoje.
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Divider style={{ background: "#00000012", margin: "8px" }} />
    </div>
  );
}
