import Actor from '../models/Actor.js';

const getList = async (req, res) => {
  try {
    const actors = await Actor.find();
    return res.json({
      actors,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al obtener actores',
    });
  }
};

const getById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.actorId);
    return res.json({
      actor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al obtener actor por id',
    });
  }
};

const create = async (req, res) => {
  try {
    const actor = await Actor.create(req.body);
    return res.json({
      msg: 'Nuevo actor creado',
      actor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al registrar actor',
    });
  }
};

const update = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(req.params.actorId, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Actor actualiizado',
      actor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al actualizar actor por id',
    });
  }
};

const remove = async (req, res) => {
  try {
    const actorId = req.params.actorId;
    await Actor.findByIdAndDelete(actorId);
    return res.json({
      msg: 'Actor eliminado',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al borrar actor',
    });
  }
};

export { getList, getById, create, update, remove };
