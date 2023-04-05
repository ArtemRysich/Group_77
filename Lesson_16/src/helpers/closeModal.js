function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { closeModal };
