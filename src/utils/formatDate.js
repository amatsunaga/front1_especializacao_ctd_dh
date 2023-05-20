export default function formatDate(date) {
  //   const formatDate = date.split("T")[0];
  //   const dataCortada = formatDate.split("-");
  // return `${dataCortada[2] / dataCortada[1] / dataCortada[0]}`;

  const dateConverted = new Date(date);
//   dateConverted.toLocaleDateString("pt-BR");
  return Intl.DateTimeFormat("pt-BR".format(dateConverted));
}
