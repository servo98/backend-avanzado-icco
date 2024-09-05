import Film from '../models/Film.js';

export const create = async (req, res) => {
  try {
    const film = await Film.create(req.body);
    return res.json({
      film,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al crear película',
    });
  }
};

export const getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    return res.json({
      films,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al obtener todas las películas',
    });
  }
};

export const getById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.filmId).populate('actors');
    return res.json({
      film,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error all obtener film by id',
    });
  }
};

export const updateById = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(req.params.filmId, req.body, {
      new: true,
    });
    return res.json(film);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Errro al actualizar film',
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.filmId);
    return res.json({
      msg: 'Película eliminada',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Errro al borrar film',
    });
  }
};
