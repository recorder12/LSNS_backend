import express from "express";
import Photo from '../models/Photo';
import routes from "../routes";
import dotenv from 'dotenv';


// test for user urls
export const getJoin = (req, res) => res.render("join");
export const getLogin = (req, res) => res.render("login");
export const getChangePassword = (req, res) => res.render("changePassword");

// test for photo urls
export const getUpload = (req, res) => res.render("upload");
export const getSearch = (req, res) => res.render("search");
export const getEditPhoto = (req, res) => res.render("editPhoto");
export const getDeletePhoto = (req, res) =>res.render("delete");






