import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

// Very small CRUD UI for the `usuario` table shown in your screenshot.
// Columns: id_usuario (int8), correo, usuario, contrasenia, pais_region, fecha_registro

function initialForm() {
  return { correo: '', usuario: '', contrasenia: '', pais_region: '' }
}

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialForm())
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    setLoading(true)
    const { data, error } = await supabase
      .from('usuario')
      .select('*')
      .order('id_usuario', { ascending: true })

    if (error) setError(error.message)
    else setUsers(data || [])
    setLoading(false)
  }

  async function createUser(payload) {
    setLoading(true)
    const { data, error } = await supabase.from('usuario').insert(payload).select()
    if (error) setError(error.message)
    else {
      setUsers((u) => [...u, ...data])
      setForm(initialForm())
    }
    setLoading(false)
  }

  async function updateUser(id, payload) {
    setLoading(true)
    const { data, error } = await supabase
      .from('usuario')
      .update(payload)
      .eq('id_usuario', id)
      .select()

    if (error) setError(error.message)
    else {
      setUsers((u) => u.map((item) => (item.id_usuario === id ? data[0] : item)))
      setEditingId(null)
      setForm(initialForm())
    }
    setLoading(false)
  }

  async function deleteUser(id) {
    if (!confirm('Delete this user?')) return
    setLoading(true)
    const { error } = await supabase.from('usuario').delete().eq('id_usuario', id)
    if (error) setError(error.message)
    else setUsers((u) => u.filter((item) => item.id_usuario !== id))
    setLoading(false)
  }

  function startEdit(user) {
    setEditingId(user.id_usuario)
    setForm({ correo: user.correo || '', usuario: user.usuario || '', contrasenia: user.contrasenia || '', pais_region: user.pais_region || '' })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    const payload = { ...form }
    if (editingId) updateUser(editingId, payload)
    else createUser(payload)
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>CRUD Supabase </h1>

      <section style={{ marginBottom: 20 }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 480 }}>
          <input name="correo" value={form.correo} onChange={handleChange} placeholder="correo" />
          <input name="usuario" value={form.usuario} onChange={handleChange} placeholder="usuario" />
          <input name="contrasenia" value={form.contrasenia} onChange={handleChange} placeholder="contrasenia" />
          <input name="pais_region" value={form.pais_region} onChange={handleChange} placeholder="pais_region" />
          <div>
            <button type="submit" disabled={loading}>{editingId ? 'Update' : 'Create'}</button>
            {editingId && <button type="button" onClick={() => { setEditingId(null); setForm(initialForm()) }}>Cancel</button>}
          </div>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </section>

      <section>
        <h2>List</h2>
        {loading && <div>Loading...</div>}
        {!loading && users.length === 0 && <div>No users yet</div>}
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>id</th>
              <th>correo</th>
              <th>usuario</th>
              <th>pais_region</th>
              <th>fecha_registro</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id_usuario}>
                <td>{u.id_usuario}</td>
                <td>{u.correo}</td>
                <td>{u.usuario}</td>
                <td>{u.pais_region}</td>
                <td>{u.fecha_registro ? new Date(u.fecha_registro).toLocaleString() : ''}</td>
                <td>
                  <button onClick={() => startEdit(u)}>Edit</button>
                  <button onClick={() => deleteUser(u.id_usuario)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App
