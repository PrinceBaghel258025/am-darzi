require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routers/index");
const connect = require("./db");
const server = require("http").Server(app);
const cors = require('cors')

// routers
const categoryRouter = require('./routers/categoryRouter')
const attributeRouter = require('./routers/attributeRouter')
const productRouter = require('./routers/productRouter')
const designRouter = require('./routers/designRouter')


// admin Router
const adminRouter = require('./routers/adminRoter')

app.use(express.json());
app.use(cors())
connect(process.env.MONGODB_URi);

app.get("/", (req, res) => {
  return res.send("hello");
});

app.use(express.static(`public`));
app.use('/admin', adminRouter)

// add category , get category
app.use('/category', categoryRouter);
// for admin to add attributes
app.use('/attributes', attributeRouter);

app.use('/products', productRouter)

app.use('/design', designRouter)
{
  /*
app.use('/',router)
app.use('/about', aboutRouter)
app.use('/accessories',accessoriesRouter)
app.use('/account',accountRouter)
app.use('/contact',contactRouter)
app.use('/design',designRouter)
app.use('/fabrics',fabricsRouter)
app.use('/faqs',faqsRouter)
app.use('/oppurtunity',opportunityRouter)

//
app.use('/press',opportunityRouter)
app.use('/privacy-policy',opportunityRouter)
app.use('/promise',opportunityRouter)

app.use('/service', serviceRouter)
app.use('/suits',suitsRouter)
app.use('/terms-of-use',termsRouter)
app.use('/heritage',heritageRouter)
app.use('/oppurtunity',opportunityRouter)
app.use('/',router)
*/
}

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
