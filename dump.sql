--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: artist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artist (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    genre character varying(100) NOT NULL,
    gender character varying(10) NOT NULL,
    origin character varying(20) NOT NULL,
    albums character varying(255) NOT NULL,
    img character varying
);


--
-- Name: artist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artist_id_seq OWNED BY public.artist.id;


--
-- Name: artist id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist ALTER COLUMN id SET DEFAULT nextval('public.artist_id_seq'::regclass);


--
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.artist (id, name, genre, gender, origin, albums, img) FROM stdin;
20	Fabolous	Hip Hop	Male	USA	8	https://static.billboard.com/files/media/Fabolous-2016-m-b-billboard-1548-1024x677.jpg
21	Halsey	Pop/R&B	Female	USA	3	https://upload.wikimedia.org/wikipedia/commons/a/ad/Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg
5	Stevie Wonder	R&B 	Male	USA	26	https://www.onthisday.com/images/people/stevie-wonder-medium.jpg
6	Michael Jackson	Pop	Male	USA	12	https://image.cnbcfm.com/api/v1/image/105602466-1543595722220michaeljacksonthrillergettyimages-91142854.jpg?v=1543595853
3	Mobb Deep	Hip Hop	Male	USA	9	https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fmobb-deep-the-infamous-25th-anniversary-reissue-news-001.jpg?quality=95&w=1170&cbr=1&q=90&fit=max
13	Skepta	Hip Hop/Grime	Male	UK	5	https://ichef.bbci.co.uk/news/976/cpsprodpb/CD10/production/_90669425_skepta.jpg
12	Notorious B.I.G	Hip Hop	Male	USA	3	https://images-na.ssl-images-amazon.com/images/I/8141RkLhheL._AC_SL1500_.jpg
10	Jhene Aiko	R&B	Female	USA	3	https://ssl.ulximg.com/public/userfiles/2019/11/30/GettyImages-1062713364.jpg
8	Madonna 	Pop	Female	USA	14	https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/madonna-launches-mdna-skin-collection-at-ludlow-house-on-news-photo-1584981110.jpg
7	Adele	Pop	Female	Uk	4	https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/12/931/524/adele.jpg?ve=1&tl=1
9	Beyonce	Pop	Female	USA	6	https://media.vogue.com/r/pass/2018/08/06/04-beyonce-style-evolution.jpg
14	Nicki Minaj	Hip Hop/Pop	Female	USA	4	https://www.rollingstone.com/wp-content/uploads/2018/08/shutterstock_9726415bo.jpg?resize=1800,1200&w=1800
17	Jay-Z	Hip Hop	Male	USA	13	https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/1200px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg
18	George Clinton	Funk	Male	USA	10	https://images.equipboard.com/uploads/user/image/71974/original_squared_george-clinton.jpg?v=1589829278
19	Jadakiss	Hip Hop	Male	USA	6	https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/yo0d8ba3jaepd8xvcmnq/twitter-users-react-jadakiss-pizza-crust-order
\.


--
-- Name: artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artist_id_seq', 21, true);


--
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

