  formatDate(chunk, context, bodies, params) {
    let date = new Date(params.date);
    let formattedDate = moment(date).format('LL');
    chunk.write(formattedDate);
  }