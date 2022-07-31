const URL_API_INTEGRATORS =
  'https://62e302c6b54fc209b883ce7d.mockapi.io/api-innova/integradores'

export const fetchAddIntegrators = async ({
  name,
  cpfCnpj,
  ownerName,
  state,
  city,
  marks,
  companySize
}) => {
  try {
    await fetch(URL_API_INTEGRATORS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpfCnpj: cpfCnpj,
        nomeIntegrador: name,
        nomeProprietario: ownerName,
        cidade: city,
        estado: state,
        marcas: marks,
        porteEmpresa: companySize
      })
    })
  } catch (error) {
    return error
  }
}
