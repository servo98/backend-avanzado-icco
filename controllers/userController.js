import User from '../models/User.js';

const changeAvatar = async (req, res) => {
  try {
    const url = req.file.path;

    //findByIdAndUpdate regresa el modelo antes de sere actualizado
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        avatar: url,
      },
      { new: true }
    );

    return res.json({
      msg: 'Avatar de usuario modificado',
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar avatar',
    });
  }
};

export { changeAvatar };
