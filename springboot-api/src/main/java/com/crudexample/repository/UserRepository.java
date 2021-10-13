package com.crudexample.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.crudexample.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

}
