package com.example.dao;

import com.example.entity.Person;

import javax.persistence.*;
import java.util.List;

public class PersonDAO {

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("personPU");

    public List<Person> findAll() {
        EntityManager em = emf.createEntityManager();
        return em.createQuery("SELECT p FROM Person p", Person.class).getResultList();
    }

    public Person findById(int id) {
        EntityManager em = emf.createEntityManager();
        return em.find(Person.class, id);
    }

    public List<Person> findByName(String name) {
        EntityManager em = emf.createEntityManager();
        return em.createQuery(
                "SELECT p FROM Person p WHERE p.name LIKE :name",
                Person.class)
                .setParameter("name", "%" + name + "%")
                .getResultList();
    }

    public void save(Person p) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();
    }

    public void update(Person p) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.merge(p);
        em.getTransaction().commit();
    }

    public void delete(int id) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Person p = em.find(Person.class, id);
        if (p != null) em.remove(p);
        em.getTransaction().commit();
    }
}
