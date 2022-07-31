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

export const fetchUpdateIntegrators = async (
  { name, cpfCnpj, ownerName, state, city, marks, companySize },
  id
) => {
  try {
    await fetch(`${URL_API_INTEGRATORS}/${id}`, {
      method: 'PUT',
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

export const fetchDeleteIntegrators = async (id) => {
  try {
    await fetch(`${URL_API_INTEGRATORS}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return error
  }
}

export const fetchGetIntegrators = async () => {
  try {
    const result = await fetch(URL_API_INTEGRATORS)
    return result.json()
  } catch (error) {
    return error
  }
}
