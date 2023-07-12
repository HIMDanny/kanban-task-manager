const mapToDto = <T extends U, U>(entity: T): U => {
  const dto: U = {
    ...entity,
  };
  return dto;
};

export { mapToDto };
