import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { api } from "../../services/api";

export function CreateNote() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(removed) {
    setLinks(prevState => prevState.filter(link => link !== removed));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(removed) {
    setTags(prevState => prevState.filter(tag => tag !== removed));
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o título da nota");
    }
    
    if(newLink) {
      return alert("Tem um link não adicionado. Clique no '+' ou deixe o campo vazio.");
    }

    if(newTag) {
      return alert("Tem uma tag não adicionada. Clique no '+' ou deixe o campo vazio.");
    }
    
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso.");
    navigate("/");
  }

  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input
            placeholder="Título"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e=> setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => {handleRemoveTag(tag)}}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}