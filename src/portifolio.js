import React, { useState } from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    margin: "25px",
    fontSize: "3.5em",
    "&:hover": {
      color: "#ffffff75",
      cursor: "pointer",
    },
  },
  imagem: {
    display: "flex",
    // width: "100px",
    // height: "100px",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // marginTop: "-50px",
    // marginLeft: "-50px",
  },
  div: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    marginTop: "10%",
    marginBottom: "10%",
  },
});

export default function Portifolio() {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const data = [
    "data:image/jpeg;base64,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",
    "https://media.ceert.org.br/portal-3/img/noticias/originais/20171213-blog-da-galera-5-mulheres-negras-para-seguir.jpg",
  ];

  const handlePage = (tipo) => {
    if (tipo === "ant") {
      if (page === 0) return;
      setPage(page - 1);
    } else {
      if (page === data.length - 1) return;
      setPage(page + 1);
    }
  };
  return (
    <div className={classes.div}>
      <ArrowBackIosIcon
        className={classes.icon}
        onClick={() => handlePage("ant")}
      />
      <img className={classes.imagem} src={data[page]} />
      <ArrowForwardIosIcon
        className={classes.icon}
        onClick={() => handlePage("prox")}
      />
    </div>
  );
}
