package com.example.resource;

import com.example.dao.PersonDAO;
import com.example.entity.Person;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON) 
public class PersonResource {

    PersonDAO dao = new PersonDAO();

    @GET
    public List<Person> getAll() {
        return dao.findAll();
    }

    @GET
    @Path("/{id}")
    public Person getById(@PathParam("id") int id) {
        return dao.findById(id);
    }

    @GET
    @Path("/search")
    public List<Person> search(@QueryParam("name") String name) {
        return dao.findByName(name);
    }

    @POST
    public void add(Person p) {
        dao.save(p);
    }

    @PUT
    @Path("/{id}")
    public void update(@PathParam("id") int id, Person p) {
        p.setId(id);
        dao.update(p);
    }

    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") int id) {
        dao.delete(id);
    }
}
